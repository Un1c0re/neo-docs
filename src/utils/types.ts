// types.ts
export interface Article {
    frontmatter: {
      title: string;
      excerpt?: string;
    };
    url: string;
  }
 
export interface ArticleCardProps extends Article {
    cardColor: string;
}  

export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
}
  
export function getRandomRgbColor(): string {
    const red = Math.floor(180 + Math.random() * 255);
    const green = Math.floor(180 + Math.random() * 255);
    const blue = Math.floor(180 + Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}
  