import { generateClasses } from '@formkit/themes'
const config = {
  config: {
    classes: generateClasses({
      global: {
        wrapper: 'space-y-2 mb-4',
        message: 'text-white bg-red-500 text-center font-bold text-sm uppercase p-2 my-5 rounded-lg',
        label: 'block text-white text-lg font-bold mb-2',
        input: 'w-full p-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 ',
      },
      submit: {
        input: '$reset bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-bold w-full p-3 mt-10',
      }
    })
  }
}
export default config
