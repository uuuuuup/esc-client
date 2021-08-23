import pen from "../../resources/icons/Pen.png";

export const Content6 = () => {
  return (
    <div className="w-full max-w-7xl m-auto my-40 flex flex-col items-center px-4">
      <div className="text-4xl">Advantage</div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <img
            className="block mx-auto"
            src={pen}
            width={64}
            height={64}
            alt=""
          />
          <div className="mt-10 font-bold text-xl">학생의 입장</div>
          <div>
            누구보다 학생의 입장에서 학생을 파악하여 문제점을 이해하고 현실적인
            문제 해결책을 제공합니다.
          </div>
        </div>
        <div>
          <img
            className="block mx-auto"
            src={pen}
            width={64}
            height={64}
            alt=""
          />
          <div className="mt-10 font-bold text-xl">무상의 프로그램</div>
          <div>
            모든 멘토링 프로그램과 진단은 무상으로 진행되어 모두에게 배움과
            나눔의 기회를 제공합니다.
          </div>
        </div>
        <div>
          <img
            className="block mx-auto"
            src={pen}
            width={64}
            height={64}
            alt=""
          />
          <div className="mt-10 font-bold text-xl">활발한 커뮤니케이션</div>
          <div>
            세계 곳곳의 멘토와 멘티들간의 활발하고 빠른 커뮤니케이션을 통해
            배움을 나눔합니다.
          </div>
        </div>
      </div>
    </div>
  );
};
