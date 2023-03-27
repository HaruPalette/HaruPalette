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
  // canvas: HTMLCanvasElement;
  // ctx: CanvasRenderingContext2D;
  resizeScreen: () => void;
  init: () => void;
  distance: (x1: number, y1: number, x2: number, y2: number) => number;
  nodeTransfer: () => void;
  nodeMove: () => void;
  nodeDraw: (ctx: CanvasRenderingContext2D) => void;
  loop: (ctx: CanvasRenderingContext2D) => void;
  action: (ctx: CanvasRenderingContext2D) => void;
}
