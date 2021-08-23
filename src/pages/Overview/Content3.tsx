import image4 from "../../resources/images/4.jpeg";
import pen from "../../resources/icons/Pen.png";

export const Content3 = () => {
  return (
    <div
      className="mt-20"
      style={{
        backgroundImage: `url(${image4})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-7xl m-auto px-4">
        <div className="pt-10 text-3xl sm:text-5xl text-center">
          모두가 동등한 배움의 기회
        </div>
        <div className="mt-20 text-2xl sm:text-4xl">단체 멘토링</div>
        <div className="mt-5 text-sm sm:text-base">
          각 분야에서 매우 우수하고 탁월한 성과를 낸 학생들이 그들의 배움을
          나눔합니다. <br />
          그저 지식을 나눔하는 것이 아니라 배워가는 법을 나눕니다.
        </div>
        <div className="mt-10 text-xl sm:text-2xl"> 대표 수업</div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <img src={pen} width={32} height={32} alt="" />
              <div>Physics (물리학)</div>
              <br />
              <div className="text-sm sm:text-base">
                일반물리학을 비롯한 대학물리의 기본 개념과 원리, 문제풀이의
                응용, 각종 시험과 대회 준비에 필요한 팁을 나눔합니다.
              </div>
            </div>
            <div>
              <img src={pen} width={32} height={32} alt="" />
              <div>Programming (프로그래밍)</div>
              <br />
              <div className="text-sm sm:text-base">
                프로그래밍 언어 자바(Java)의 문법, 컴퓨터 공학의 기본 이론, 실전
                프로그래밍을 위한 응용법, 문제 풀이 등을 나눔합니다.
              </div>
            </div>
            <div>
              <img src={pen} width={32} height={32} alt="" />
              <div>Economics (경제학)</div>
              <br />
              <div className="text-sm sm:text-base">
                미시 경제와 거시 경제의 이론, 문제 풀이를 위한 응용, writing
                competition 준비를 위한 팁을 나눔합니다.
              </div>
            </div>
            <div>
              <img src={pen} width={32} height={32} alt="" />
              <div>MUN(모의 유엔)</div>
              <br />
              <div className="text-sm sm:text-base">
                모의 유엔의 다양한 규칙들, 진행을 위한 준비, 대회 수상을 위한
                팁, 우수한 팀과 함께 대회에 참여할 수 있는 기회를 나눔합니다.
              </div>
            </div>
          </div>
        </div>
        <button className="block mx-auto my-10">더 알아보기</button>
        <br />
      </div>
    </div>
  );
};
