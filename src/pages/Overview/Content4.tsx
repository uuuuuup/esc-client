import image5 from "../../resources/images/5.png";

export const Content4 = () => {
  return (
    <div className="w-full max-w-7xl m-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
      <img src={image5} width={554} height={645} alt="" />
      <div>
        <div className="my-10 text-6xl">1 : 1 멘토링</div>
        <div>
          1:1 멘토링 프로그램은 우수한 멘토와 함께 성장해 나갈 수 있는 기회를
          나눔합니다.
          <br /> 메신저와 멘토링 전용 웹사이트를 통해 멘토에게 학업적 질문과
          상담을 할 수 있습니다.
          <br /> 모든 멘토들은 단체내의 철저한 인터뷰와 학업적 진단 평가를 통해
          선별되며 <br />
          멘토와 멘티 모두 관리와 지원의 기회를 나눔합니다.
        </div>
        <button className="block mx-auto my-10 text-2xl">
          1:1 멘토링 신청하기
        </button>
        <div className="mt-5 text-3xl">멘토로서 당신의 배움을 나눠주세요!</div>
        <div className="mt-5">
          멘토로 활동하며 당신의 배움을 나눠주세요!
          <br /> 멘토로 활동하는 동안 당신의 배움을 맘껏 나눌 수 있도록 적극적인
          지원을 통해 도와드립니다.
          <br /> 멘토로서의 활동을 통해 봉사시간을 수여할 수 있습니다.
        </div>
        <div className="text-center">
          (학교의 volunteering time 관리 정책에 따라 상이할 수 있습니다.)
        </div>
        <button className="block mx-auto my-10 text-2xl">멘토 신청하기</button>
      </div>
    </div>
  );
};
