// Simple transition logic for the bar chart
document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.bg-surface-container-lowest.w-full');
    bars.forEach((bar, index) => {
        const targetHeight = bar.style.height || '0%';
        bar.style.height = '0%';
        
        setTimeout(() => {
            bar.style.transition = 'height 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            bar.style.height = targetHeight;
        }, 200 + (index * 150));
    });
});