function changeBackgroundColorAndTextColor() {
    const mbtiType = document.getElementById('mbti-type').value;
    let bgColor = '';
    let textColor = '';

    switch (mbtiType) {
        case 'ISTJ':
            bgColor = 'bg-gray-700';
            textColor = 'text-gray-400';
            break;
        case 'ISFJ':
            bgColor = 'bg-green-700';
            textColor = 'text-green-400';
            break;
        case 'INFJ':
            bgColor = 'bg-blue-700';
            textColor = 'text-blue-400';
            break;
        case 'INTJ':
            bgColor = 'bg-purple-700';
            textColor = 'text-purple-400';
            break;
        case 'ISTP':
            bgColor = 'bg-red-700';
            textColor = 'text-red-400';
            break;
        case 'ISFP':
            bgColor = 'bg-yellow-700';
            textColor = 'text-yellow-400';
            break;
        case 'INFP':
            bgColor = 'bg-pink-700';
            textColor = 'text-pink-400';
            break;
        case 'INTP':
            bgColor = 'bg-indigo-700';
            textColor = 'text-indigo-400';
            break;
        case 'ESTP':
            bgColor = 'bg-orange-700';
            textColor = 'text-orange-400';
            break;
        case 'ESFP':
            bgColor = 'bg-teal-700';
            textColor = 'text-teal-400';
            break;
        case 'ENFP':
            bgColor = 'bg-cyan-700';
            textColor = 'text-cyan-400';
            break;
        case 'ENTP':
            bgColor = 'bg-lime-700';
            textColor = 'text-lime-400';
            break;
        case 'ESTJ':
            bgColor = 'bg-amber-700';
            textColor = 'text-amber-400';
            break;
        case 'ESFJ':
            bgColor = 'bg-rose-700';
            textColor = 'text-rose-400';
            break;
        case 'ENFJ':
            bgColor = 'bg-fuchsia-700';
            textColor = 'text-fuchsia-400';
            break;
        case 'ENTJ':
            bgColor = 'bg-violet-700';
            textColor = 'text-violet-400';
            break;
        default:
            bgColor = 'bg-gray-800';
            textColor = 'text-white';
    }

    document.body.className = `${bgColor} text-white font-sans leading-normal tracking-normal`;
    document.getElementById('character-name').className = `font-bold text-lg overflow-hidden transition-color ${textColor}`;
}
