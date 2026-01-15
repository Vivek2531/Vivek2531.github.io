import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const GlobeMesh = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta / 5;
        }
    });

    return (
        <Sphere ref={meshRef} args={[1, 16, 16]}>
            <meshBasicMaterial
                color="#818cf8"
                wireframe
                transparent
                opacity={0.3}
            />
        </Sphere>
    );
};

const HolographicGlobe = () => {
    return (
        <div style={{ width: '60px', height: '60px' }}>
            <Canvas camera={{ position: [0, 0, 3] }}>
                <GlobeMesh />
            </Canvas>
        </div>
    );
};

export default HolographicGlobe;
