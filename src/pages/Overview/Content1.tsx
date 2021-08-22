import image0 from "../../resources/images/0.jpeg";

export const Content1 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image0})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-7xl m-auto py-10 text-white">
        <div className="text-5xl md:text-7xl text-center">
          우리는 배움을 나눕니다.
        </div>
        <div className="text-2xl md:text-4xl mt-10 ml-4 lg:ml-10 mb-40">
          <div>E.S.C.란 Education Sharing Center의 약자로</div>
          <div>배움을 나누는 비영리 단체입니다.</div>
        </div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col justify-center">
            <div className="text-3xl md:text-6xl mb-10">단체 멘토링</div>
            <button className="text-xl md:text-2xl">알아보기</button>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-3xl md:text-6xl mb-10">1:1 멘토링</div>
            <button className="text-xl md:text-2xl">알아보기</button>
          </div>
        </div>
      </div>
    </div>
  );
};
