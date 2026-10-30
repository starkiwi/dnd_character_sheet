import { Suspense } from 'react'
import {Canvas, useLoader} from '@react-three/fiber'
import {OrbitControls} from "@react-three/drei"
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import {RingGeometry} from "three";

const characterPos: [number, number, number] = [
    -80,    // x
    -60,      // y
    0,      // z
];

const characterRot: [number, number, number] = [
    -Math.PI / 1.98,    // x
    0,
    0
];

function CharacterModel() {
    const geometry = useLoader(
        STLLoader,
        "../public/elf_archer_sb.stl"
    );
    return (
        <group
            position={characterPos}
            rotation={characterRot}>
            <mesh geometry={geometry}>
                <meshStandardMaterial
                    color="#BAF5F4"
                />
            </mesh>
        </group>
    );
}

function Platform(){
    const geometry = new RingGeometry(20, 20.5, 30);
    return (
        <group
            position={[characterPos[0], characterPos[1]-3, characterPos[2]]}
            rotation={characterRot}
        >
            <mesh geometry={geometry}>
                <meshStandardMaterial />
            </mesh>
        </group>
    );
}

export default function CharacterViewer() {
    return (
        <>
            <Canvas id={"characterModel"}>
                <ambientLight intensity={0.7} />
                <pointLight position={[characterPos[0]+3, characterPos[1]+32, characterPos[2]-9]} intensity={100} />
                <OrbitControls
                    enableZoom={false}
                    autoRotate={true}
                    autoRotateSpeed={1.3}
                    enableDamping={true}
                    target={characterPos}
                />
                <Suspense fallback={null}>
                    <CharacterModel />
                    <Platform />
                </Suspense>
            </Canvas>
        </>
    )
}