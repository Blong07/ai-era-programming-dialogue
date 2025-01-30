import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface SupportingInfo {
  source: string;
  points: string[];
}

const ProgrammingSurvey = () => {
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no' | null>(null);
  const [opinion, setOpinion] = useState('');

  const supportingInfo: Record<'yes' | 'no', SupportingInfo> = {
    yes: {
      source: 'https://www.weforum.org/agenda/2023/01/why-learning-to-code-is-still-essential-in-the-ai-era/',
      points: [
        'Programming helps understand AI limitations and capabilities',
        'Coding skills enable customization and control of AI tools',
        'Software development remains crucial for creating AI applications',
        'Problem-solving skills from programming are universally valuable'
      ]
    },
    no: {
      source: 'https://www.forbes.com/sites/bernardmarr/2023/04/17/will-chatgpt-and-ai-replace-programmers-and-software-developers/',
      points: [
        'AI can generate code automatically',
        'No-code platforms are becoming more powerful',
        'AI assistants can handle basic programming tasks',
        'Focus might shift to AI prompt engineering instead'
      ]
    }
  };

  const handleSubmit = () => {
    if (!selectedOption || !opinion.trim()) {
      alert('Please select an option and provide your opinion before submitting.');
      return;
    }
    console.log('Submitted:', { opinion, selectedOption });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Programming in the AI Era: Essential or Obsolete?
          </h1>
          <p className="text-2xl text-gray-700">
            Is learning to program still essential in the age of AI?
          </p>
        </div>

        <Card className="p-6 shadow-lg">
          <div className="space-y-4">
            <label className="block text-lg font-medium text-gray-700">
              Share your opinion and justification:
            </label>
            <Textarea
              value={opinion}
              onChange={(e) => {
                const newValue = e.target.value;
                if (newValue.length <= 200) {
                  setOpinion(newValue);
                }
              }}
              className="min-h-[100px]"
              placeholder="Type your thoughts here..."
              maxLength={200}
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">
                {opinion.length}/200 characters
              </span>
              <Button 
                onClick={handleSubmit}
                className="bg-primary hover:bg-primary/90"
              >
                Submit
              </Button>
            </div>
          </div>
        </Card>

        <div className="flex justify-center gap-4">
          <Button
            onClick={() => setSelectedOption('yes')}
            className={`px-8 py-4 text-lg transition-all ${
              selectedOption === 'yes' ? 'bg-primary' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Yes
          </Button>
          <Button
            onClick={() => setSelectedOption('no')}
            className={`px-8 py-4 text-lg transition-all ${
              selectedOption === 'no' ? 'bg-secondary' : 'bg-gray-200 text-gray-700'
            }`}
          >
            No
          </Button>
        </div>

        {selectedOption && (
          <Card className="p-6 shadow-lg animate-fadeIn">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Supporting Information
              </h3>
              <a
                href={supportingInfo[selectedOption].source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline block"
              >
                Source Article
              </a>
              <ul className="list-disc pl-6 space-y-2">
                {supportingInfo[selectedOption].points.map((point, index) => (
                  <li key={index} className="text-gray-700">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProgrammingSurvey;