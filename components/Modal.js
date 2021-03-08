export default function Modal({ visible, setVisible }) {
  return (
    <div
      className={`${
        visible ? "relative" : "hidden"
      }  fixed z-10 inset-0 overflow-y-auto`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className={` ${
            visible
              ? "ease-out duration-300 opacity-100"
              : "ease-in duration-200 opacity-0"
          } fixed inset-0 transition-opacity`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className={` ${
            visible
              ? "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100"
              : "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          } inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  General Model
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Since the 1960s the magnitude of Lake Chad, which serves as
                    the major source of water for millions of people, has
                    decreased by 90% (Griffin, 2020). The resulting change of
                    the landscape has led to the rise of a scene of violent
                    conflict caused by terrorist groups such as Boko Haram,
                    which in 2014 has expanded from Nigeria to the rest of the
                    Lake Chad Basin (Lake Chad Crisis in Depth | MSF, 2020).
                    This has led to a humanitarian crisis that has led to more
                    than 10 million people fleeing their homes and relying on
                    aid for survival. Those interconnected events and actors
                    have formed the current state of affairs and make this
                    problem complex and wicked.
                  </p>
                  <br />
                  <p className="text-sm text-gray-500">
                    The humanitarian crisis consists of the following main
                    struggles: Climate change, the resulting shrinking of the
                    lake and conflict that emerged in the region, and the
                    refugee crisis that emerged from these problems. With this
                    in mind, and in order to have a clear, in-depth
                    understanding of the whole crisis, the overview of the whole
                    situation will follow a theme-based structure, where each of
                    the just-mentioned struggles receives particular, detailed
                    attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
