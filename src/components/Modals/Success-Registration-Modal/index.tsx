import { SuccessModalProps } from "../Registration-Modal/interface";

const SuccessRegistrationModal = ({
  showModal,
  closeModal,
  batchNumber,
}: SuccessModalProps) => {
  if (showModal) {
    return (
      <div className="absolute bg-[#00000090] top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div className="relative xl:w-2/3 lg:w-2/3 md:w-2/3 w-[90%] px-2 text-center h-1/2 bg-[#FFF] flex flex-col items-center justify-center">
          <button
            onClick={() => closeModal(false)}
            className="absolute top-5 right-5 h-[2rem] w-[2rem] bg-[#44444490] flex items-center justify-center rounded-full"
          >
            <p className="font-[800] text-[#FFF]">X</p>
          </button>
          <h1 className="text-[3rem] font-[700]">Thank you</h1>
          <h5 className="text-[1.2rem]">
            for registering for AYAC2024. Below is your batch number
          </h5>
          <div className="h-[4rem] bg-[#F5F5F5] px-6 flex items-center justify-center rounded-[10px]">
            <span className="xl:text-[2rem] lg:text-[2rem] md:text-[2rem] text-[1.2rem] xl:font-[500] lg:font-[500] md:font-[500] font-[700]">
              {batchNumber}
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default SuccessRegistrationModal;
