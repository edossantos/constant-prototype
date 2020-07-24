export const _formatNumberTwoDecimal = (number) => {
    return Number(parseFloat(number).toFixed(2)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits : 2, minimumFractionDigits : 2 });
}

export const _formartNumberToThousand = (number) => {
    return Number(parseFloat(number).toFixed(0)).toLocaleString('en-US');
}

export default { _formatNumberTwoDecimal, _formartNumberToThousand }

