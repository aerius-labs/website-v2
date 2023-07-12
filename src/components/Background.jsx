import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import wc from "./../asserts/img/circle2.jpeg";
import "./Background.css";

const Background = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, starGeo, stars;

    const init = () => {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2;

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      starGeo = new THREE.BufferGeometry();

      let positions = [];
      let velocities = [];
      let accelerations = [];

      for (let i = 0; i < 8000; i++) {
        positions.push(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300
        );
        velocities.push(0);
        accelerations.push(0.001);
      }

      starGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(positions), 3)
      );

      starGeo.setAttribute(
        "velocity",
        new THREE.BufferAttribute(new Float32Array(velocities), 1)
      );

      starGeo.setAttribute(
        "acceleration",
        new THREE.BufferAttribute(new Float32Array(accelerations), 1)
      );

      let sprite = new THREE.TextureLoader().load(wc);

      let starMaterial = new THREE.PointsMaterial({
        color: "white",
        size: 0.4,
        map: sprite,
        transparent: true,
      });

      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);

      animate();
    };

    const animate = () => {
      let positions = starGeo.getAttribute("position");
      let velocities = starGeo.getAttribute("velocity");
      let accelerations = starGeo.getAttribute("acceleration");

      for (let i = 0; i < positions.count; i++) {
        velocities.array[i] += accelerations.array[i];
        positions.array[i * 3 + 1] -= velocities.array[i];

        if (positions.array[i * 3 + 1] < -200) {
          positions.array[i * 3 + 1] = 200;
          velocities.array[i] = 0;
        }
      }

      positions.needsUpdate = true;
      velocities.needsUpdate = true;
      stars.rotation.y += 0.002;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", onWindowResize);

    init();
  }, []);

  return <div ref={containerRef} className="background" />;
};

export default Background;
