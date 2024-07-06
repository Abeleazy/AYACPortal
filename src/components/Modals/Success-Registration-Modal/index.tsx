import { SuccessModalProps } from "../Registration-Modal/interface";

const SuccessRegistrationModal = ({
  showModal,
  closeModal,
  batchNumber,
}: SuccessModalProps) => {
  if (showModal) {
    return (
      <div className="absolute bg-[#00000090] top-0 left-0 w-screen h-screen flex items-center justify-center">
        <button
          onClick={() => closeModal(false)}
          className="absolute top-5 right-5 h-[2rem] w-[2rem] bg-[#FFF] flex items-center justify-center rounded-full"
        >
          <p className="font-[800]">X</p>
        </button>
        <div className="w-2/3 h-1/2 bg-[#FFF] flex flex-col items-center justify-center">
          <h1 className="text-[3rem] font-[700]">Thank you</h1>
          <h5 className="text-[1.2rem]">
            for registering for AYAC2024. Below is your batch number
          </h5>
          <div className="h-[4rem] bg-[#F5F5F5] px-6 flex items-center justify-center rounded-[10px]">
            <span className="text-[2rem] font-[500]">{batchNumber}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default SuccessRegistrationModal;
