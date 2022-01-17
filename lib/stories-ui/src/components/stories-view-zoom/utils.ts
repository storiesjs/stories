export function browserSupportsCssZoom(): boolean {
  try {
    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document.implementation.createHTMLDocument('').body.style as any).zoom !== undefined
    );
  } catch (error) {
    return false;
  }
}

export function computeZoomStyle(zoom: number): Record<string,string> {
  return {
    zoom: zoom.toPrecision(2),
  }
}

export function computeTransformStyle(height: number, zoom: number): Record<string,string> {
  return {
    height: (height + 50).toFixed(),
    transformOrigin: 'top left',
    transform: `scale(${zoom})`,
  }
}
