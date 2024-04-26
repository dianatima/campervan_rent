import { LineWave } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      {
        <LineWave
          visible={true}
          height="100"
          width="100"
          color="#ff727d"
          ariaLabel="line-wave-loading"
          wrapperStyle={{}}
          wrapperClass=""
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      }
    </>
  );
};
