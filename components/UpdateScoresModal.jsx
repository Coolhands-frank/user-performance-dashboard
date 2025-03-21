'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useChart } from '../app/context/ChartContext';

const UpdateScoresModal = () => {
  const [open, setOpen] = useState(false);
  const { updateScores } = useChart();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      rank: '',
      percentile: '',
      currentScore: '',
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    updateScores(data); // Update global chart state
    setOpen(false);
    reset();
  };

  return (
    <div className="text-center">
      <button
        className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
        onClick={() => setOpen(true)}
      >
        Update
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl ">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold ">Update scores</h2>
              <img src="/html-logo.png" alt="HTML5" className="w-8 h-8" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Rank Input */}
              <div className="flex flex-col md:flex-row w-full">
                <label className="flex items-center font-medium mb-1 md:w-2/3">
                  <span className="mr-2 bg-blue-800 text-blue-200 rounded-full px-2 py-1 text-xs">1</span>
                  Update your <span className="font-bold ml-1">Rank</span>
                </label>
                <div className="md:w-1/3">
                  <input
                    type="number"
                    placeholder="Rank"
                    {...register('rank', {
                      required: 'required | should be number',
                      validate: (value) => !isNaN(value) || 'should be number',
                    })}
                    className={`focus:outline-none focus:ring-0 w-full border ${errors.rank ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                  />
                  {errors.rank && <p className="text-left text-xs text-red-500 mt-1">{errors.rank.message}</p>}
                </div>
              </div>

              {/* Percentile Input */}
              <div className="flex flex-col md:flex-row w-full">
                <label className="md:w-2/3 flex items-center font-medium mb-1">
                  <span className="mr-2 bg-blue-800 text-blue-200 rounded-full px-2 py-1 text-xs">2</span>
                  Update your <span className="font-bold ml-1">Percentile</span>
                </label>
                <div className="md:w-1/3">
                  <input
                    type="number"
                    {...register('percentile', {
                      required: 'required | percentile 0-100',
                      min: { value: 0, message: 'must be ≥ 0' },
                      max: { value: 100, message: 'must be ≤ 100' },
                    })}
                    className={`focus:outline-none focus:ring-0 w-full border ${errors.percentile ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                  />
                  {errors.percentile && <p className="text-left text-xs text-red-500 mt-1">{errors.percentile.message}</p>}
                </div>
              </div>

              {/* Current Score Input */}
              <div className="flex flex-col md:flex-row w-full">
                <label className="md:w-2/3 flex items-center font-medium mb-1">
                  <span className="mr-2 bg-blue-800 text-blue-200 rounded-full px-2 py-1 text-xs">3</span>
                  Update your <span className="font-bold ml-1">Current Score (out of 15)</span>
                </label>
                <div className="md:w-1/3">
                  <input
                    type="number"
                    {...register('currentScore', {
                      required: 'value required | must be < 15',
                      min: { value: 0, message: 'must be ≥ 0' },
                      max: { value: 15, message: 'must be ≤ 15' },
                    })}
                    className={`focus:outline-none focus:ring-0 w-full border ${errors.currentScore ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                  />
                  {errors.currentScore && <p className="text-xs text-red-500 mt-1">{errors.currentScore.message}</p>}
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    reset();
                  }}
                  className="px-4 py-2 border border-blue-800 text-blue-800 rounded hover:bg-blue-50"
                >
                  cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-500 flex items-center space-x-1"
                >
                  <span>save</span>
                  <span>→</span>
                </button>
              </div>

              
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateScoresModal;
