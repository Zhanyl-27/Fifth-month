const WithResult = 
(Wrapp) => ({a, b}) => {
    const result = a + b;

    return <Wrapp result={result} />;   
};

export default WithResult;