// Ambient declarations for non-code side-effect imports (e.g. global stylesheets).
declare module "*.css";

// JSX intrinsic elements registered via extend() from the `meshline` package,
// used by the Lanyard component (<meshLineGeometry /> / <meshLineMaterial />).
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import type { Object3DNode, MaterialNode } from "@react-three/fiber";

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
    meshLineMaterial: MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>;
  }
}
