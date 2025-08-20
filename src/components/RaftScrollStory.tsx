import { useState, useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { motion, AnimatePresence } from 'framer-motion';

interface StepData {
  step: number;
  title: string;
  description: string;
}

const steps: StepData[] = [
  {
    step: 0,
    title: "Client Request",
    description: "A client sends a store-file request to the Raft cluster leader. The leader receives the request and prepares to replicate it across the cluster."
  },
  {
    step: 1,
    title: "Log Replication",
    description: "The leader appends the store-file entry to its log and replicates it to all follower nodes in the cluster simultaneously."
  },
  {
    step: 2,
    title: "Follower Acknowledgment",
    description: "Each follower receives the log entry, appends it to their own log, and sends an acknowledgment back to the leader."
  },
  {
    step: 3,
    title: "Commit & Response",
    description: "Once the leader receives acknowledgments from a majority of nodes, it commits the entry and responds to the client with success."
  }
];

export default function RaftScrollStory() {
  const [currentStep, setCurrentStep] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const onStepEnter = ({ data }: { data: number }) => {
    setCurrentStep(data);
  };

  return (
    <section className="w-full max-w-6xl mb-16">
      <div className="bg-[#fff5ed] border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Store-File Works in Raft</h2>
          <p className="text-lg text-gray-600 mb-2">
            Scroll down to see the animation
          </p>
          <div className="text-sm text-gray-500">
            ↓ Scroll to explore each step ↓
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <Scrollama onStepEnter={onStepEnter} offset={0.5}>
              {steps.map((step, index) => (
                <Step data={index} key={index}>
                  <div className="min-h-[400px] flex items-center">
                    <div className={`bg-white border-[2px] border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg transition-all duration-300 ${
                      currentStep === index ? 'scale-105 shadow-[6px_6px_0_0_rgba(0,0,0,1)]' : 'opacity-60'
                    }`}>
                      <div className="flex items-center mb-4">
                        <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Step>
              ))}
            </Scrollama>
          </div>

          {/* Right Column - Sticky Visualization */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-white border-[2px] border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg">
              <RaftVisualization currentStep={currentStep} prefersReducedMotion={prefersReducedMotion} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface RaftVisualizationProps {
  currentStep: number;
  prefersReducedMotion: boolean;
}

function RaftVisualization({ currentStep, prefersReducedMotion }: RaftVisualizationProps) {
  const animationDuration = prefersReducedMotion ? 0 : 0.8;
  
  return (
    <div className="w-full h-96 relative">
      <svg viewBox="0 0 700 400" className="w-full h-full">
        {/* Client */}
        <motion.g
          animate={{ 
            scale: currentStep === 0 ? 1.1 : 1,
            opacity: currentStep === 3 ? 0.7 : 1
          }}
          transition={{ duration: animationDuration }}
        >
          <rect x="80" y="175" width="80" height="50" rx="8" fill="#f2e4d8" stroke="black" strokeWidth="3"/>
          <text x="120" y="205" textAnchor="middle" fill="black" fontSize="14" fontWeight="bold">Client</text>
        </motion.g>

        {/* Leader */}
        <motion.g
          animate={{ 
            scale: [0, 1, 2, 3].includes(currentStep) ? 1.1 : 1
          }}
          transition={{ duration: animationDuration }}
        >
          <rect x="310" y="175" width="80" height="50" rx="8" fill="#fff5ed" stroke="black" strokeWidth="3"/>
          <text x="350" y="205" textAnchor="middle" fill="black" fontSize="14" fontWeight="bold">Leader</text>
        </motion.g>

        {/* Follower 1 */}
        <motion.g
          animate={{ 
            scale: [1, 2].includes(currentStep) ? 1.1 : 1
          }}
          transition={{ duration: animationDuration }}
        >
          <rect x="540" y="110" width="80" height="50" rx="8" fill="white" stroke="black" strokeWidth="3"/>
          <text x="580" y="140" textAnchor="middle" fill="black" fontSize="14" fontWeight="bold">Follower</text>
        </motion.g>

        {/* Follower 2 */}
        <motion.g
          animate={{ 
            scale: [1, 2].includes(currentStep) ? 1.1 : 1
          }}
          transition={{ duration: animationDuration }}
        >
          <rect x="540" y="240" width="80" height="50" rx="8" fill="white" stroke="black" strokeWidth="3"/>
          <text x="580" y="270" textAnchor="middle" fill="black" fontSize="14" fontWeight="bold">Follower</text>
        </motion.g>

        {/* Request Arrow (Client to Leader) */}
        <AnimatePresence>
          {currentStep >= 0 && (
            <motion.g
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: animationDuration, delay: 0.2 }}
            >
              <defs>
                <marker id="arrowhead1" markerWidth="4" markerHeight="3" refX="3" refY="1.5" orient="auto">
                  <polygon points="0 0, 4 1.5, 0 3" fill="black" />
                </marker>
              </defs>
              <motion.line
                x1="160"
                y1="200"
                x2="310"
                y2="200"
                stroke="black"
                strokeWidth="3"
                markerEnd="url(#arrowhead1)"
              />
              <motion.circle
                cx="160"
                cy="200"
                r="3"
                fill="black"
                animate={{ cx: [160, 310] }}
                transition={{ duration: animationDuration * 2, repeat: Infinity, ease: "linear" }}
              />
              <text x="235" y="190" textAnchor="middle" fill="black" fontSize="12" fontWeight="bold">
                store-file
              </text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Replication Arrows (Leader to Followers) */}
        <AnimatePresence>
          {currentStep >= 1 && (
            <motion.g
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: animationDuration, delay: 0.2 }}
            >
              <defs>
                <marker id="arrowhead2" markerWidth="4" markerHeight="3" refX="3" refY="1.5" orient="auto">
                  <polygon points="0 0, 4 1.5, 0 3" fill="black" />
                </marker>
              </defs>
              <motion.line
                x1="390"
                y1="185"
                x2="540"
                y2="135"
                stroke="black"
                strokeWidth="3"
                markerEnd="url(#arrowhead2)"
              />
              <motion.line
                x1="390"
                y1="215"
                x2="540"
                y2="265"
                stroke="black"
                strokeWidth="3"
                markerEnd="url(#arrowhead2)"
              />
              <motion.circle
                cx="390"
                cy="185"
                r="3"
                fill="black"
                animate={{ 
                  cx: [390, 540],
                  cy: [185, 135]
                }}
                transition={{ duration: animationDuration * 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle
                cx="390"
                cy="215"
                r="3"
                fill="black"
                animate={{ 
                  cx: [390, 540],
                  cy: [215, 265]
                }}
                transition={{ duration: animationDuration * 2.5, repeat: Infinity, ease: "linear" }}
              />
              <text x="440" y="155" textAnchor="middle" fill="black" fontSize="12" fontWeight="bold">
                replicate
              </text>
              <text x="440" y="255" textAnchor="middle" fill="black" fontSize="12" fontWeight="bold">
                replicate
              </text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Acknowledgment Arrows (Followers to Leader) */}
        <AnimatePresence>
          {currentStep >= 2 && (
            <motion.g
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: animationDuration, delay: 0.2 }}
            >
              <defs>
                <marker id="arrowhead3" markerWidth="4" markerHeight="3" refX="3" refY="1.5" orient="auto">
                  <polygon points="0 0, 4 1.5, 0 3" fill="black" />
                </marker>
              </defs>
              <motion.line
                x1="540"
                y1="145"
                x2="390"
                y2="195"
                stroke="black"
                strokeWidth="3"
                markerEnd="url(#arrowhead3)"
              />
              <motion.line
                x1="540"
                y1="255"
                x2="390"
                y2="205"
                stroke="black"
                strokeWidth="3"
                markerEnd="url(#arrowhead3)"
              />
              <motion.circle
                cx="540"
                cy="145"
                r="3"
                fill="black"
                animate={{ 
                  cx: [540, 390],
                  cy: [145, 195]
                }}
                transition={{ duration: animationDuration * 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle
                cx="540"
                cy="255"
                r="3"
                fill="black"
                animate={{ 
                  cx: [540, 390],
                  cy: [255, 205]
                }}
                transition={{ duration: animationDuration * 2.5, repeat: Infinity, ease: "linear" }}
              />
              <text x="480" y="185" textAnchor="middle" fill="black" fontSize="12" fontWeight="bold">
                ack
              </text>
              <text x="480" y="225" textAnchor="middle" fill="black" fontSize="12" fontWeight="bold">
                ack
              </text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Response Arrow (Leader to Client) */}
        <AnimatePresence>
          {currentStep >= 3 && (
            <motion.g
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: animationDuration, delay: 0.2 }}
            >
              <defs>
                <marker id="arrowhead4" markerWidth="4" markerHeight="3" refX="3" refY="1.5" orient="auto">
                  <polygon points="0 0, 4 1.5, 0 3" fill="black" />
                </marker>
              </defs>
              <motion.line
                x1="310"
                y1="210"
                x2="160"
                y2="210"
                stroke="black"
                strokeWidth="3"
                markerEnd="url(#arrowhead4)"
              />
              <motion.circle
                cx="310"
                cy="210"
                r="3"
                fill="black"
                animate={{ cx: [310, 160] }}
                transition={{ duration: animationDuration * 2, repeat: Infinity, ease: "linear" }}
              />
              <text x="235" y="230" textAnchor="middle" fill="black" fontSize="12" fontWeight="bold">
                success
              </text>
            </motion.g>
          )}
        </AnimatePresence>


      </svg>
    </div>
  );
}