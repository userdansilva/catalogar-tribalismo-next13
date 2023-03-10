import {
  FaAsterisk,
  FaBeer,
  FaGraduationCap,
  FaHeart,
  FaMedal,
  FaMusic,
  FaOtter,
  FaQuidditch,
  FaRegListAlt,
  FaSuitcase,
  FaTheaterMasks,
  FaThLarge,
  FaUserFriends,
  FaUserGraduate,
  FaFireAlt
} from 'react-icons/fa'

export const getIconsById = (id: number) => {
  const icons = [
    {
      id: 7, // Diversos
      icon: <FaAsterisk />
    },
    {
      id: 213, // Diversos
      icon: <FaAsterisk />
    },
    {
      id: 8, // Bebidas
      icon: <FaBeer />
    },
    {
      id: 211, // Bebida
      icon: <FaBeer />
    },
    {
      id: 9, // Terceirão
      icon: <FaGraduationCap />
    },
    {
      id: 209, // Terceirão
      icon: <FaGraduationCap />
    },
    {
      id: 10, // Porto/Viagens
      icon: <FaSuitcase />
    },
    {
      id: 11, // Formatura
      icon: <FaUserGraduate />
    },
    {
      id: 12, // Cursos
      icon: <FaRegListAlt />
    },
    {
      id: 212, // Cursos
      icon: <FaRegListAlt />
    },
    {
      id: 13, // Amizades
      icon: <FaUserFriends />
    },
    {
      id: 210, // Amigos
      icon: <FaUserFriends />
    },
    {
      id: 14, // Logos
      icon: <FaTheaterMasks />
    },
    {
      id: 15, // Pandemia
      icon: <FaOtter />
    },
    {
      id: 16, // Casal
      icon: <FaHeart />
    },
    {
      id: 17, // Músicas
      icon: <FaMusic />
    },
    {
      id: 18, // Desenho
      icon: <FaQuidditch />
    },
    {
      id: 37, // Em destaque
      icon: <FaMedal />
    },
    {
      id: 215, // Novas
      icon: <FaFireAlt />
    }
  ]

  const result = icons.find(icon => icon.id === id)

  if (result) return result
  else
    return {
      id: 0,
      icon: <FaThLarge />
    }
}
