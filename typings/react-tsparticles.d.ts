declare module 'react-tsparticles' {
    import { ComponentType } from 'react';
  
    export interface ParticlesProps {
      id?: string;
      init?: (engine: any) => Promise<void>;
      loaded?: (container: any) => Promise<void>;
      options?: any;
      style?: React.CSSProperties;
      width?: string;
      height?: string;
      className?: string;
    }
  
    export const Particles: ComponentType<ParticlesProps>;
  }
  