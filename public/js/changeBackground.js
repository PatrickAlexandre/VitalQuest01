function changeBackgroundColorAndTextColor() {
    const mbtiType = document.getElementById('mbti-type').value;
    let bgColor = '';
    let textColor = '';
    let lifePercentageColor = '';

    switch (mbtiType) {
        case 'ISTJ':
            bgColor = 'bg-gray-700';
            textColor = 'text-gray-400';
            lifePercentageColor = 'bg-gray-500';
            break;
        case 'ISFJ':
            bgColor = 'bg-green-700';
            textColor = 'text-green-400';
            lifePercentageColor = 'bg-green-500';
            break;
        case 'INFJ':
            bgColor = 'bg-blue-700';
            textColor = 'text-blue-400';
            lifePercentageColor = 'bg-blue-500';
            break;
        case 'INTJ':
            bgColor = 'bg-purple-700';
            textColor = 'text-purple-400';
            lifePercentageColor = 'bg-purple-500';
            break;
        case 'ISTP':
            bgColor = 'bg-red-700';
            textColor = 'text-red-400';
            lifePercentageColor = 'bg-red-500';
            break;
        case 'ISFP':
            bgColor = 'bg-yellow-700';
            textColor = 'text-yellow-400';
            lifePercentageColor = 'bg-yellow-500';
            break;
        case 'INFP':
            bgColor = 'bg-pink-700';
            textColor = 'text-pink-400';
            lifePercentageColor = 'bg-pink-500';
            break;
        case 'INTP':
            bgColor = 'bg-indigo-700';
            textColor = 'text-indigo-400';
            lifePercentageColor = 'bg-indigo-500';
            break;
        case 'ESTP':
            bgColor = 'bg-orange-700';
            textColor = 'text-orange-400';
            lifePercentageColor = 'bg-orange-500';
            break;
        case 'ESFP':
            bgColor = 'bg-teal-700';
            textColor = 'text-teal-400';
            lifePercentageColor = 'bg-teal-500';
            break;
        case 'ENFP':
            bgColor = 'bg-cyan-700';
            textColor = 'text-cyan-400';
            lifePercentageColor = 'bg-cyan-500';
            break;
        case 'ENTP':
            bgColor = 'bg-lime-700';
            textColor = 'text-lime-400';
            lifePercentageColor = 'bg-lime-500';
            break;
        case 'ESTJ':
            bgColor = 'bg-amber-700';
            textColor = 'text-amber-400';
            lifePercentageColor = 'bg-amber-500';
            break;
        case 'ESFJ':
            bgColor = 'bg-rose-700';
            textColor = 'text-rose-400';
            lifePercentageColor = 'bg-rose-500';
            break;
        case 'ENFJ':
            bgColor = 'bg-fuchsia-700';
            textColor = 'text-fuchsia-400';
            lifePercentageColor = 'bg-fuchsia-500';
            break;
        case 'ENTJ':
            bgColor = 'bg-violet-700';
            textColor = 'text-violet-400';
            lifePercentageColor = 'bg-violet-500';
            break;
        default:
            bgColor = 'bg-gray-800';
            textColor = 'text-white';
            lifePercentageColor = 'bg-gray-500';
    }

    document.body.className = `${bgColor} text-white font-sans leading-normal tracking-normal`;
    document.getElementById('character-name').className = `font-bold text-lg overflow-hidden transition-color ${textColor}`;
    document.getElementById('lifePercentage').className = `text-xs leading-none py-1 text-center text-white rounded overflow-hidden ${lifePercentageColor}`;
}
