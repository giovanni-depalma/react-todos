import tw from "twin.macro";
const BaseButton = tw.button`p-1 ml-2 border-2 rounded shrink-0`
export const DangerButton = tw(BaseButton)`text-red-500 border-red-500 hover:text-white hover:bg-red-500`;
export const PrimaryButton = tw(BaseButton)`text-green-500 border-green-500 hover:text-white hover:bg-green-500`;
export const SecondaryButton = tw(BaseButton)`text-gray-500 border-gray-500 hover:text-white hover:bg-gray-500`;