'use client';

import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

// ---

export default function DataVisuals() {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  const [isSelecting, setIsSelecting] = useState<Boolean>();

  const [canvasItems, setCanvasItems] = useState<CanvasItem[]>([
    {
      x: 10,
      y: 10,
      width: 150,
      height: 100,
      color: '#58D989',
    },
    {
      x: 100,
      y: 100,
      width: 150,
      height: 100,
      color: '#18ab03',
    },
  ]);

  const [points, setPoints] = useState<Array<Point | BezierPoint>>([
    { cp1x: 10, cp1y: 10, cp2x: 20, cp2y: 30, x: 20, y: 30 },
    { x: 0, y: 0 },
  ]);

  useEffect(() => {
    const theCanvas = canvas.current;
    if (theCanvas !== null) {
      const ctx = theCanvas.getContext('2d');
      if (ctx !== null && canvasItems !== null) {
        // clear canvas
        ctx.clearRect(0, 0, theCanvas.width, theCanvas.height);

        // draw all rectangles
        canvasItems.forEach((canvasItem) => {
          ctx.fillStyle = canvasItem.color;
          ctx.fillRect(
            canvasItem.x,
            canvasItem.y,
            canvasItem.width,
            canvasItem.height
          );
        });
      }

      if (ctx !== null && canvasItems !== null) {
        // draw bezier stuff
        canvasItems.forEach((canvasItem) => {
          ctx.fillStyle = canvasItem.color;
          ctx.fillRect(
            canvasItem.x,
            canvasItem.y,
            canvasItem.width,
            canvasItem.height
          );
        });
      }
    }

    // // This will move all rectangles one unit to the right every 100ms
    // setTimeout(() => {
    //   setCanvasItems(
    //     canvasItems.map((canvasItem) => ({
    //       ...canvasItem,
    //       x: canvasItem.x + 1,
    //     }))
    //   );
    // }, 100);
  }, [canvas, canvasItems]);

  return (
    <>
      <Head>
        <title>Data Visualization</title>
        <meta
          name="description"
          content="This is a Data Visualization Application written in Next.js"
        />
      </Head>
      <div className="bg-gray-900 overflow-x-hidden">
        <div className="mx-auto min-h-screen h-screen pt-2">
          <div className="max-w-6xl mx-auto">
            Canvas here
            <canvas
              ref={canvas}
              className="bg-gray-800 w-full"
              onClick={(e) => {
                // add a point for the bezier curve
                // - if first point is set already, start adding a bezierpoint
                // - else set a regular point
                if (points.length === 0) {
                  // setPoints()
                } else if (points.length > 0) {
                }
                console.log(e);
              }}
              onDrag={(e) => {
                // check if selected
              }}
              onMouseUp={(e) => {
                setIsSelecting(false);
              }}
            ></canvas>
          </div>
        </div>
      </div>
    </>
  );
}

// ---

type CanvasItem = {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
};

type BezierPoint = {
  cp1x: number;
  cp1y: number;
  cp2x: number;
  cp2y: number;
  x: number;
  y: number;
};

type Point = {
  x: number;
  y: number;
};
