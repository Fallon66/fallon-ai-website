import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizQuestion from '../components/QuizQuestion';
import QuizResults from '../components/QuizResults';
import { quizQuestions, quizResults, QuizResult } from '../data/quizQuestions';

interface Answer {
  questionId: number;
  value: string | number;
  points: number;
  tag?: string;
}

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string | number | null>(null);
  const [showResults, setShowResults] = useState(false);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('quizProgress');
    if (savedProgress) {
      const { questionIndex, savedAnswers } = JSON.parse(savedProgress);
      setCurrentQuestionIndex(questionIndex);
      setAnswers(savedAnswers);
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (answers.length > 0) {
      localStorage.setItem('quizProgress', JSON.stringify({
        questionIndex: currentQuestionIndex,
        savedAnswers: answers
      }));
    }
  }, [currentQuestionIndex, answers]);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Load previous answer when navigating back
  useEffect(() => {
    const previousAnswer = answers.find(a => a.questionId === currentQuestion.id);
    if (previousAnswer) {
      setCurrentAnswer(previousAnswer.value);
    } else {
      setCurrentAnswer(null);
    }
  }, [currentQuestionIndex, currentQuestion.id, answers]);

  const handleAnswer = (value: string | number) => {
    setCurrentAnswer(value);
  };

  const handleNext = () => {
    if (currentAnswer === null || currentAnswer === '') return;

    // Calculate points and tag for this answer
    let points = 0;
    let tag: string | undefined;

    if (currentQuestion.type === 'single' && currentQuestion.options && typeof currentAnswer === 'number') {
      const option = currentQuestion.options[currentAnswer];
      points = option.points;
      tag = option.tag;
    }

    // Update or add answer
    const newAnswers = answers.filter(a => a.questionId !== currentQuestion.id);
    newAnswers.push({
      questionId: currentQuestion.id,
      value: currentAnswer,
      points,
      tag
    });
    setAnswers(newAnswers);

    // Move to next question or show results
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      localStorage.removeItem('quizProgress');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setCurrentAnswer(null);
    setShowResults(false);
    localStorage.removeItem('quizProgress');
  };

  const calculateScore = () => {
    return answers.reduce((total, answer) => total + answer.points, 0);
  };

  const getResult = (score: number): QuizResult => {
    return quizResults.find(r => score >= r.minScore && score <= r.maxScore) || quizResults[0];
  };

  const getTags = () => {
    return answers
      .filter(a => a.tag)
      .map(a => a.tag!)
      .filter((tag, index, self) => self.indexOf(tag) === index); // Remove duplicates
  };

  const getOpenText = () => {
    const textAnswer = answers.find(a => a.questionId === 10);
    return textAnswer ? String(textAnswer.value) : '';
  };

  if (showResults) {
    const score = calculateScore();
    const result = getResult(score);
    const tags = getTags();
    const openText = getOpenText();

    return (
      <QuizResults
        score={score}
        result={result}
        tags={tags}
        openText={openText}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <>
      {/* Exit Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-20 right-4 z-50 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-white hover:border-purple-300 transition-all duration-200"
      >
        ✕ Exit Quiz
      </button>

      <QuizQuestion
        question={currentQuestion}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={quizQuestions.length}
        selectedAnswer={currentAnswer}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onBack={handleBack}
        isFirstQuestion={currentQuestionIndex === 0}
        octopusProgress={((currentQuestionIndex + 1) / quizQuestions.length) * 100}
      />
    </>
  );
};

export default Quiz;
