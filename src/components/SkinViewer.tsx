import { h, FunctionalComponent } from "preact";
import { useRef, useEffect } from "preact/hooks";

type SkinViewerProps = {};
const width = 96;
const height = 64;
const nbImages = 19;

export const SkinViewer: FunctionalComponent<SkinViewerProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current !== null) {
      const image = new Image();
      image.src = "/trenchgun.png";

      const context =
        canvasRef.current.getContext("2d") || new CanvasRenderingContext2D();

      context.fillStyle = "#f00";
      context.fillRect(0, 0, 120, 120);
    }
  }, []);

  return <canvas height={height} ref={canvasRef} width={width} />;
};
