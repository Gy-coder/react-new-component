const unique = (arr: number[]) => {
  return Array.from(new Set([...arr]));
};

export default function usePages(totalPage: number, curPage: number) {
  let pages = [];
  if (totalPage <= 7) {
    for (let i = 0; i < totalPage; i++) {
      pages.push(i + 1);
    }
  } else {
    pages = unique([
      1,
      totalPage,
      curPage,
      curPage + 1,
      curPage + 2,
      curPage - 1,
      curPage - 2,
    ])
      .filter((x) => x >= 1 && x <= totalPage)
      .sort((a, b) => a - b)
      .reduce((prev: any[], cur, index, arr) => {
        if (arr[index + 1] && arr[index + 1] - arr[index] > 1) {
          prev.push(cur);
          prev.push('···');
        } else {
          prev.push(cur);
        }
        return prev;
      }, []);
  }
  return { pages };
}
