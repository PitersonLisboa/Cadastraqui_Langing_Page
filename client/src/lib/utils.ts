import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

type ScheduleType = 'demo' | 'plan-basic' | 'plan-pro' | 'plan-enterprise' | 'seller'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function whatsAppMessage({ type }: { type: ScheduleType }) {
  const msgByType = {
    'demo': 'Olá, gostaria de agendar uma demonstração da plataforma do CadastrAqui?',
    'plan-basic': 'Olá, gostaria de saber mais sobre o plano básico do CadastrAqui?',
    'plan-pro': 'Olá, gostaria de saber mais sobre o plano profissional do CadastrAqui?',
    'plan-enterprise': 'Olá, gostaria de saber mais sobre o plano enterprise do CadastrAqui?',
    'seller': 'Olá, gostaria de saber mais sobre a plataforma CadastrAqui.',
  }
  const number = import.meta.env.VITE_PHONE_CONTACT

  const message = encodeURIComponent(msgByType[type as keyof typeof msgByType])

  let url = `https://wa.me/${number}`

  if (message) {
    url += `?text=${message}`
  }

  window.open(url, '_blank');
}

