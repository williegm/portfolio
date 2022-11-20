import { useState, useEffect } from "react";
import { ConnectKitButton } from "connectkit";
import {
  useAccount,
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from "wagmi";
import { utils } from "ethers";
import Swal from "sweetalert2";

import SectionTitle from "../global/SectionTitle";
import { testimonials } from "@/data/content/support";

const wallet = process.env.NEXT_PUBLIC_WALLET_ADDRESS;

function Testimonials() {
  const { isConnected } = useAccount();
  const [value, setValue] = useState("0.01");

  const { config, error } = usePrepareSendTransaction({
    request: {
      to: wallet,
      value: value ? utils.parseEther(value) : undefined,
    },
  });

  const { data, sendTransaction } = useSendTransaction(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handlePayment = (count: number) => {
    if (error) {
      Swal.fire({
        icon: "info",
        title: "Insufficient fund!",
        text: "You don't have enough ETH on your wallet.",
        showConfirmButton: true,
      });
      return;
    }
    setValue(count.toString());
    sendTransaction();
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thanks for your support!",
        text: "William Grimmette",
        showConfirmButton: false,
        timer: 5000,
      });
    }
  }, [isSuccess]);

  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="You love my work!" />
      <div className="max-w-2xl m-auto md:max-h-[200px] grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-2 items-start">
        {testimonials.map((item, index) => {
          return (
            <div
              key={index}
              className="relative bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full flex flex-col justify-between"
            >
              {index === 0 && (
                <>
                  <img
                    className="sqD top-[-50px] left-0 bottom-auto right-auto md:bottom-[-50px] md:top-auto md:right-[-25px] md:left-auto w-20 z-[-100]"
                    src="/static/doodles/testimonials/yay.svg"
                  />
                </>
              )}
              <p className="text-base italic relative testimonialQuote">
                {item.quote}
              </p>
              <div className="mt-4 text-xs text-fun-gray">
                <div className="flex items-center">
                  <ConnectKitButton.Custom>
                    {({ isConnected, show }) => {
                      return (
                        <button
                          className="border py-2 px-3 rounded-xl border-fun-pink-light"
                          onClick={
                            isConnected ? () => handlePayment(item.count) : show
                          }
                          disabled={!error && isConnected && !sendTransaction}
                        >
                          {!isLoading ? (
                            <>Buy me ${item.count} ETH</>
                          ) : (
                            <>Sending ...</>
                          )}
                        </button>
                      );
                    }}
                  </ConnectKitButton.Custom>
                  {!isConnected ? (
                    <div className="ml-3">Not connected</div>
                  ) : (
                    <>
                      <div className="ml-3">{error ? "" : "💙"}</div>
                    </>
                  )}
                  {error && <div>Insufficient balance</div>}
                </div>
              </div>
              {index === 1 && (
                <img
                  className="sqD top-[-30px] right-[-15px] w-11"
                  src="/static/doodles/testimonials/squiggle2.svg"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
