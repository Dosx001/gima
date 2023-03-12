import { createSignal } from "solid-js";

const ResizableBox = (props: { color: string }) => {
  let drag: HTMLElement | undefined;
  const [height, setHeight] = createSignal(200);
  const [width, setWidth] = createSignal(200);
  const [left, setLeft] = createSignal(200);
  const [top, setTop] = createSignal(200);
  const minWidth = 200;
  const minHeight = 200;
  const handleMouseDown = (e: MouseEvent, direction: string) => {
    e.stopPropagation();
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = width();
    const startHeight = height();
    const startLeft = left();
    const startTop = top();
    const draggable = e.target === drag;
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (draggable) {
        setLeft(startLeft + dx);
        setTop(startTop + dy);
      } else {
        switch (direction) {
          default:
            setHeight(() => {
              const h = Math.max(minHeight, startHeight - dy);
              if (h !== 200) setTop(startTop + dy);
              return h;
            });
            break;
          case "right":
            setWidth(Math.max(minWidth, startWidth + dx));
            break;
          case "bottom":
            setHeight(Math.max(minHeight, startHeight + dy));
            break;
          case "left":
            setWidth(() => {
              const w = Math.max(minWidth, startWidth - dx);
              if (w !== 200) setLeft(startLeft + dx);
              return w;
            });
        }
      }
    };
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  return (
    <div
      class="absolute select-none p-4"
      style={{
        height: `${height()}px`,
        width: `${width()}px`,
        left: `${left()}px`,
        top: `${top()}px`,
        border: `2px solid ${props.color}`,
      }}
    >
      <span
        ref={drag}
        class="absolute bottom-[46%] cursor-move"
        style={{ color: props.color }}
        onMouseDown={(e) => handleMouseDown(e, "")}
      >
        +
      </span>
      <span
        class="absolute left-1/2 top-[-8px] h-4 w-4 cursor-ns-resize rounded-full"
        style={{ background: props.color }}
        onMouseDown={(e) => handleMouseDown(e, "top")}
      />
      <span
        class="absolute right-[-8px] bottom-1/2 h-4 w-4 cursor-ew-resize rounded-full"
        style={{ background: props.color }}
        onMouseDown={(e) => handleMouseDown(e, "right")}
      />
      <span
        class="absolute left-1/2 bottom-[-8px] h-4 w-4 cursor-ns-resize rounded-full"
        style={{ background: props.color }}
        onMouseDown={(e) => handleMouseDown(e, "bottom")}
      />
      <span
        class="absolute left-[-8px] bottom-1/2 h-4 w-4 cursor-ew-resize rounded-full"
        style={{ background: props.color }}
        onMouseDown={(e) => handleMouseDown(e, "left")}
      />
    </div>
  );
};

export default ResizableBox;
