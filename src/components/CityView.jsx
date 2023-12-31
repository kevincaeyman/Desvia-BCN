import { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const City = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/barcelona_model.glb");
  return (
    <group {...props} ref={ref} dispose={null}>
      <group rotation={[-Math.PI / 2, 0.3, 4.8]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Model_6}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_1.geometry}
            material={materials.Model_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_2.geometry}
            material={materials.Model_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_3.geometry}
            material={materials.Model_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_4.geometry}
            material={materials.Model_3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_5.geometry}
            material={materials.Model_4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_6.geometry}
            material={materials.Model_5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_7.geometry}
            material={materials.Model_7}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_8.geometry}
            material={materials.Model_8}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_9.geometry}
            material={materials.Model_9}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_10.geometry}
            material={materials.Model_10}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_11.geometry}
            material={materials.Model_11}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_12.geometry}
            material={materials.Model_12}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_13.geometry}
            material={materials.Model_13}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_14.geometry}
            material={materials.Model_14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_15.geometry}
            material={materials.Model_15}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_16.geometry}
            material={materials.Model_16}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_17.geometry}
            material={materials.Model_17}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_18.geometry}
            material={materials.Model_18}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_19.geometry}
            material={materials.Model_19}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_20.geometry}
            material={materials.Model_20}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_21.geometry}
            material={materials.Model_21}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_22.geometry}
            material={materials.Model_22}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_23.geometry}
            material={materials.Model_23}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_24.geometry}
            material={materials.Model_24}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_25.geometry}
            material={materials.Model_25}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_26.geometry}
            material={materials.Model_26}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_27.geometry}
            material={materials.Model_27}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_28.geometry}
            material={materials.Model_28}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_29.geometry}
            material={materials.Model_29}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_30.geometry}
            material={materials.Model_30}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_31.geometry}
            material={materials.Model_31}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_32.geometry}
            material={materials.Model_32}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_33.geometry}
            material={materials.Model_33}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_34.geometry}
            material={materials.Model_34}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_35.geometry}
            material={materials.Model_35}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_36.geometry}
            material={materials.Model_36}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_37.geometry}
            material={materials.Model_37}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_38.geometry}
            material={materials.Model_38}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_39.geometry}
            material={materials.Model_39}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_40.geometry}
            material={materials.Model_40}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_41.geometry}
            material={materials.Model_41}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_42.geometry}
            material={materials.Model_42}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_43.geometry}
            material={materials.Model_43}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_44.geometry}
            material={materials.Model_44}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_45.geometry}
            material={materials.Model_45}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_46.geometry}
            material={materials.Model_46}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_47.geometry}
            material={materials.Model_47}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_48.geometry}
            material={materials.Model_48}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_49.geometry}
            material={materials.Model_49}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_50.geometry}
            material={materials.Model_50}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_51.geometry}
            material={materials.Model_51}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_52.geometry}
            material={materials.Model_52}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_53.geometry}
            material={materials.Model_53}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_54.geometry}
            material={materials.Model_54}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_55.geometry}
            material={materials.Model_55}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_56.geometry}
            material={materials.Model_56}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_57.geometry}
            material={materials.Model_57}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_58.geometry}
            material={materials.Model_58}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6_59.geometry}
            material={materials.Model_59}
          />
        </group>
      </group>
    </group>
  );
});

useGLTF.preload("/barcelona_model.glb");