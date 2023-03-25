export interface BallReturn {
  color: string;
  nNodes: number;
  transferSpeed: number;
  propagationSpeed: number;
  resistance: number;
  wo: number;
  ho: number;
  lastColor: number | undefined;
  dxNode: number;
  mouse: {
    x: number;
    y: number;
    xo: number | undefined;
    yo: number | undefined;
    limit: number;
  };
  mouseX: number;
  mouseY: number;
  velocity: number;
  direction: number;
  mouseRadius: number;
  x: number[];
  y: number[];
  x0: number[];
  y0: number[];
  vx: number[];
  vy: number[];
}
