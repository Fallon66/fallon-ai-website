import { QuizQuestion as QuizQuestionType } from '../data/quizQuestions';

interface QuizQuestionProps {
  question: QuizQuestionType;
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswer: string | number | null;
  onAnswer: (value: string | number) => void;
  onNext: () => void;
  onBack: () => void;
  isFirstQuestion: boolean;
  octopusProgress: number;
}

const QuizQuestion = ({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  onNext,
  onBack,
  isFirstQuestion,
  octopusProgress
}: QuizQuestionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 font-medium">
              Question {currentQuestion} of {totalQuestions}
            </span>
            <span className="text-sm text-purple-600 font-medium">
              {Math.round((currentQuestion / totalQuestions) * 100)}%
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 ease-out"
              style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Octopus Progress Indicator */}
        <div className="mb-8 text-center">
          <div className="text-6xl mb-2 animate-bounce">🐙</div>
          <p className="text-sm text-gray-600 italic">
            {octopusProgress < 30 && "Just getting started..."}
            {octopusProgress >= 30 && octopusProgress < 60 && "Making progress!"}
            {octopusProgress >= 60 && octopusProgress < 90 && "Almost there!"}
            {octopusProgress >= 90 && "Final stretch!"}
          </p>
        </div>

        {/* Question Card */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {question.question}
          </h2>

          {question.type === 'single' && question.options && (
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onAnswer(index)}
                  className={`w-full p-6 rounded-xl text-left transition-all duration-200 ${
                    selectedAnswer === index
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105'
                      : 'bg-white border-2 border-gray-200 hover:border-purple-300 hover:shadow-md text-gray-900'
                  }`}
                >
                  <span className="text-lg font-medium">{option.text}</span>
                </button>
              ))}
            </div>
          )}

          {question.type === 'text' && (
            <textarea
              value={selectedAnswer as string || ''}
              onChange={(e) => onAnswer(e.target.value)}
              placeholder="Type your answer here..."
              rows={6}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none text-gray-900 resize-none"
            />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          {!isFirstQuestion && (
            <button
              onClick={onBack}
              className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-purple-300 hover:text-purple-600 transition-all duration-200"
            >
              ← Back
            </button>
          )}
          <button
            onClick={onNext}
            disabled={selectedAnswer === null || selectedAnswer === ''}
            className={`flex-1 px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${
              selectedAnswer === null || selectedAnswer === ''
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:scale-105'
            }`}
          >
            {currentQuestion === totalQuestions ? 'See Results →' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
