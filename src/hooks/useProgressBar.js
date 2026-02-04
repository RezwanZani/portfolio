const useProgressDot = (progress) => {
    const progressOutOfFive = Math.round((progress / 100) * 5);
    const dots = Array.from({ length: 5 }, (_, index) => index < progressOutOfFive);
    return dots;
}

export default useProgressDot;