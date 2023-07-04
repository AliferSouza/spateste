function useExeFucTemp(func, time) {
    setTimeout(function () {
      func();
    }, time || 1);
  }
  