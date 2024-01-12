import React from 'react';
import StepCart from '../../components/medium/StepCart/StepCart';


function GroupStepCard({ steps, currentStep }) {
    return (
        <div className='group-step'>
            {steps.map(({ icon, label }, index) =>
                <StepCart key={index}
                    icon={icon} label={label}
                    isActive={index <= currentStep}
                />)}
        </div>
    );
}

export default GroupStepCard;