import React from 'react';
import { useForm } from 'react-hook-form';

export default function ReportForm() {
  const { register, handleSubmit, watch } = useForm();
  console.log(watch());

  /**
   * 양식이 유효한 경우.
   */
  const onValid = (data: any, event: any) => {
    console.log('onValid', data, event);
  };

  /**
   * 양식이 유효하지 않은 경우.
   */
  const onInvalid = (data: any, event: any) => {
    console.log('onInvalid', data, event);
  };

  return (
    <>
      <form
        className='overflow-hidden bg-white drop-shadow-md sm:rounded-lg max-w-3xl m-4'
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        {/* Form Header */}
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg font-medium leading-6 text-gray-900'>
            아이알링크 스터디 보고서
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>
            오늘 스터디 때 공부한 내용을 아래에 작성해주세요.
          </p>
        </div>
        {/* End of Form Header */}

        {/* Form Body */}
        <div className='border-t border-gray-200'>
          <dl>
            {/* 보고서 제목 */}
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>보고서 제목</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                <input className='w-full border' {...register('title')} />
              </dd>
            </div>

            {/* 스터디 날짜 */}
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>스터디 날짜</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                <input className='w-full border' {...register('date')} />
              </dd>
            </div>

            {/* 참석자 */}
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>참석자</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                <input
                  className='w-full border'
                  {...register('participants')}
                />
              </dd>
            </div>

            {/* 스터디 내용 요약 */}
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                스터디 내용 요약
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                <input
                  className='w-full border h-20'
                  {...register('contents')}
                />
              </dd>
            </div>

            {/* 소요 경비 */}
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>소요 경비</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                <input className='w-full border' {...register('expense')} />
              </dd>
            </div>

            {/* 첨부 파일 */}
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>첨부 파일</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                <ul
                  role='list'
                  className='divide-y divide-gray-200 rounded-md border border-gray-200'
                >
                  <li className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
                    <div className='flex w-0 flex-1 items-center'>
                      <span className='ml-2 w-0 flex-1 truncate'>
                        resume_back_end_developer.pdf
                      </span>
                    </div>
                    <div className='ml-4 flex-shrink-0'>
                      <a
                        href='#'
                        className='font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
                    <div className='flex w-0 flex-1 items-center'>
                      <span className='ml-2 w-0 flex-1 truncate'>
                        coverletter_back_end_developer.pdf
                      </span>
                    </div>
                    <div className='ml-4 flex-shrink-0'>
                      <a
                        href='#'
                        className='font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        {/* End of Form Body */}

        {/* Form Footer */}
        <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
          {/* 저장 버튼 */}
          <button
            type='submit'
            className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          >
            저장
          </button>
        </div>
        {/* End of Form Footer */}
      </form>
    </>
  );
}
