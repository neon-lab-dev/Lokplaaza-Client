"use client";


import { ICONS } from "@/assets";
// this file is working fine, have some loading issues

import { useEffect, useRef } from "react";
import * as THREE from "three";
import Button from "../Reusable/Button/Button";

export default function ProductAR() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const GLB_URL =
  "https://ik.imagekit.io/ivvxvense/42ebacbe2d1e497283a3a06f4d472bb3_opt-compressed.glb";

  const launchAR = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      const quickLook = document.createElement("a");
      quickLook.rel = "ar";
      quickLook.href = "/models/42ebacbe2d1e497283a3a06f4d472bb3_opt-compressed.usdz";
      quickLook.click();
    } else {
      const sceneViewerUrl =
        `intent://arvr.google.com/scene-viewer/1.0?file=` +
       encodeURIComponent(GLB_URL) +
        `&mode=ar_only#Intent;scheme=https;package=com.google.android.googlequicksearchbox;end;`;

      window.location.href = sceneViewerUrl;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (typeof window === "undefined") return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
    scene.add(light);

    // --- FIX: Dynamic import for GLTFLoader ---
    const loadModel = async () => {
      const { GLTFLoader } = await import(
        "three/examples/jsm/loaders/GLTFLoader.js"
      );

      const loader = new GLTFLoader();

      loader.load(
        GLB_URL,
        (gltf) => {
          const model = gltf.scene;
          model.scale.set(1, 1, 1);
          scene.add(model);
        },
        undefined,
        (err) => console.error("GLB Load Error:", err)
      );
    };

    loadModel();

    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div >
      <Button
          onClick={launchAR}
          label="  View in Your Room"
          icon={ICONS.cube}
          className="m-4"
        />
     
    </div>
  );
}