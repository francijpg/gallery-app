export const dataUrlToFile = async (dataUrl: string, fileName: string, defaultType = 'image/jpeg'): Promise<File> => {
  const res: Response = await fetch(dataUrl);
  const data: Blob = await res.blob();
  const metadata = {
    type: res.headers.get('content-type') || defaultType,
  };
  const fileFormat = new File([data], fileName, metadata);
  return fileFormat;
}

export const dateToStringFormat = (date: Date) => {
  const formattedDate = new Date(date).toISOString().slice(0, 10);
  return formattedDate;
}

export const disableScroll = (): void => {
  document.body.style.overflow = 'hidden';
}

export const enableScroll = (): void => {
  document.body.style.overflow = 'scroll'
}