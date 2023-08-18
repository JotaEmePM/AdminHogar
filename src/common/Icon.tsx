import Icons from '../../public/icons.svg'

interface Props {
    name: string,
    size: string,
    cn: string
}

const Icon = ({ name, size, cn }: Props) => {
  return (
        <svg className={cn} width={`${size}`} height={`${size}`}>
            <use xlinkHref={`${Icons}#${name}`} />
        </svg>
  )
}

// Icon.propTypes = {
//     name: PropTypes.string.isRequired,
//     size: PropTypes.string,
//     cn: PropTypes.string
// };

export default Icon
