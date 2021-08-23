export const Footer = () => {
  return (
    <div
      className="w-full m-auto px-4 py-11 flex flex-col justify-center items-center"
      style={{ backgroundColor: "#353535" }}
    >
      <div className="text-white">Education Sharing Club</div>
      <div className="text-white mt-4">Contact</div>
      <button className="text-white">escmentoredu@gmail.com</button>
      <div className="mt-4">
        <button className="text-white">이용약관</button>
        <button className="text-white ml-4">개인정보처리방침</button>
      </div>
    </div>
  );
};
