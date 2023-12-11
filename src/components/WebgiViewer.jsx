import { useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect } from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    mobileAndTabletCheck,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger)

const WebgiViewer = () => {
    const canvasRef = useRef(null)

    const memoizedScrollAnimation = useCallback((position, target, onUpdate) => {
        if (position && target && onUpdate) {
            scrollAnimation(position, target, onUpdate)
        }
    }, [])

    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })

        const manager = await viewer.addPlugin(AssetManagerPlugin)

        const camera = viewer.scene.activeCamera
        const position = camera.position
        const target = camera.target

        // Add plugins individually.
        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        await viewer.addPlugin(BloomPlugin)

        viewer.renderer.refreshPipeline()

        await manager.addFromPath("scene (4).glb")

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true

        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false })

        window.scrollTo(0, 0)

        let needsUpdate = true

        const onUpdate = () => {
            needsUpdate = true
            viewer.setDirty()
        }
        viewer.addEventListener('preFrame', () => {
            camera.positionTargetUpdated(true)
            needsUpdate = false
        })

        memoizedScrollAnimation(position, target, onUpdate)
    }, [])
    useEffect(() => {
        setupViewer()
    }, [])

    return (
        <div className="h-screen w-screen fixed pointer-events-none top-0 flex justify-center items-center">
            <canvas className="w-full h-full bg-transparent" ref={canvasRef} />
        </div>
    );
}

export default WebgiViewer;