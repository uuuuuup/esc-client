export const Footer = () => {
  return (
    <div
      className="w-full m-auto px-4 py-11 flex flex-col justify-center items-center"
      style={{ backgroundColor: "#353535" }}
    >
      <div className="text-white mb-4">Education Sharing Club</div>
      <div className="text-white">Contact</div>
      <button className="text-white">escmentoredu@gmail.com</button>
      <div className="mt-4">
        <button className="text-white mr-4">이용약관</button>
        <button className="text-white">개인정보처리방침</button>
      </div>
    </div>
  );
};
