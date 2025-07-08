'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mark } from './logo'

function Circle({ size, delay, opacity }) {
  return (
    <motion.div
      variants={{
        idle: { width: `${size}px`, height: `${size}px` },
        active: {
          width: [`${size}px`, `${size + 10}px`, `${size}px`],
          height: [`${size}px`, `${size + 10}px`, `${size}px`],
          transition: {
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 1.25,
            ease: 'easeInOut',
            delay,
          },
        },
      }}
      style={{ '--opacity': opacity }}
      className={clsx(
        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full',
        'bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,var(--color-blue-500)_var(--opacity),transparent)_100%)]',
        'ring-1 ring-blue-500/[8%] ring-inset',
      )}
    />
  )
}

function Circles() {
  return (
    <div className="absolute inset-0">
      <Circle size={528} opacity="3%" delay={0.45} />
      <Circle size={400} opacity="5%" delay={0.3} />
      <Circle size={272} opacity="5%" delay={0.15} />
      <Circle size={144} opacity="10%" delay={0} />
      <div className="absolute inset-0 bg-linear-to-t from-white to-35%" />
    </div>
  )
}

function MainLogo() {
  return (
    <div className="absolute top-30 left-42 flex size-20 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
      <Mark className="h-9 fill-black" />
    </div>
  )
}

function Tooltip({
  children,
  description,
  title,
  isVisible,
  position = 'top',
}) {
  const getPositionClasses = () => {
    const baseClasses =
      'absolute z-10 bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] text-black rounded-lg shadow-xl overflow-hidden min-w-[200px]'

    switch (position) {
      case 'top':
        return `${baseClasses} -top-20 left-1/2 -translate-x-1/2`
      case 'bottom':
        return `${baseClasses} -bottom-20 left-1/2 -translate-x-1/2`
      case 'left':
        return `${baseClasses} top-1/2 -translate-y-1/2 -left-52`
      case 'right':
        return `${baseClasses} top-1/2 -translate-y-1/2 -right-52`
      default:
        return `${baseClasses} -top-20 left-1/2 -translate-x-1/2`
    }
  }

  const getArrowClasses = () => {
    switch (position) {
      case 'top':
        return 'absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black'
      case 'bottom':
        return 'absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-black'
      case 'left':
        return 'absolute top-1/2 -translate-y-1/2 left-full border-4 border-transparent border-l-black'
      case 'right':
        return 'absolute top-1/2 -translate-y-1/2 right-full border-4 border-transparent border-r-black'
      default:
        return 'absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black'
    }
  }

  const getAnimationValues = () => {
    switch (position) {
      case 'top':
        return {
          initial: { opacity: 0, y: 10, scale: 0.8 },
          animate: { opacity: 1, y: 0, scale: 1 },
        }
      case 'bottom':
        return {
          initial: { opacity: 0, y: -10, scale: 0.8 },
          animate: { opacity: 1, y: 0, scale: 1 },
        }
      case 'left':
        return {
          initial: { opacity: 0, x: 10, y: 40, scale: 0.8 },
          animate: { opacity: 1, x: 0, scale: 1 },
        }
      case 'right':
        return {
          initial: { opacity: 0, x: -10, y: 40, scale: 0.8 },
          animate: { opacity: 1, x: 0, scale: 1 },
        }
      default:
        return {
          initial: { opacity: 0, y: 10, scale: 0.8 },
          animate: { opacity: 1, y: 0, scale: 1 },
        }
    }
  }

  const animation = getAnimationValues()

  return (
    <div className="relative">
      {children}
      {isVisible && (
        <motion.div
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.initial}
          transition={{ duration: 0.2 }}
          className={getPositionClasses()}
        >
          <div className="px-4 py-3">
            <h3 className="mb-1 text-sm font-semibold">{title}</h3>
            <p className="text-xs leading-relaxed text-black">{description}</p>
          </div>
          <div className={getArrowClasses()} />
        </motion.div>
      )}
    </div>
  )
}

function Logo({
  text,
  left,
  top,
  hover,
  description,
  tooltipPosition = 'top',
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Tooltip
      description={description}
      title={text}
      isVisible={isHovered}
      position={tooltipPosition}
    >
      <motion.div
        variants={{
          idle: { x: 0, y: 0, rotate: 0 },
          active: {
            x: [0, hover.x, 0],
            y: [0, hover.y, 0],
            rotate: [0, hover.rotate, 0],
            transition: {
              duration: 0.75,
              repeat: Infinity,
              repeatDelay: 1.25,
              ease: 'easeInOut',
              delay: hover.delay,
            },
          },
        }}
        style={{ left, top }}
        className="absolute flex size-28 cursor-pointer items-center justify-center rounded-full bg-white text-sm font-medium text-black shadow-sm ring-1 ring-black/5 transition-all duration-200 hover:scale-105 hover:shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </motion.div>
    </Tooltip>
  )
}

export function LogoCluster() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <Circles />
      <div className="absolute left-1/2 h-full w-[26rem] -translate-x-1/2">
        <MainLogo />
        <Logo
          text="Google Sheets"
          left={340}
          top={144}
          hover={{ x: 6, y: 1, rotate: 5, delay: 0.38 }}
          description="Spreadsheet application for data analysis and collaboration"
          tooltipPosition="right"
        />

        <Logo
          text="Google Ads"
          left={285}
          top={30}
          hover={{ x: 4, y: -5, rotate: 6, delay: 0.3 }}
          description="Online advertising platform for reaching customers"
          tooltipPosition="bottom"
        />

        <Logo
          text="Salesforce"
          left={240}
          top={210}
          hover={{ x: 3, y: 5, rotate: 7, delay: 0.2 }}
          description="Customer relationship management (CRM) platform"
          tooltipPosition="right"
        />

        <Logo
          text="Google Analytics"
          left={144}
          top={0}
          hover={{ x: -2, y: -5, rotate: -6, delay: 0.15 }}
          description="Web analytics service for tracking website performance"
          tooltipPosition="left"
        />

        <Logo
          text="DNI"
          left={25}
          top={80}
          hover={{ x: -4, y: -5, rotate: -6, delay: 0.35 }}
          description="Data and insights platform for business intelligence"
          tooltipPosition="left"
        />

        <Logo
          text="Conversations"
          left={96}
          top={210}
          hover={{ x: -3, y: 5, rotate: 3, delay: 0.15 }}
          description="Communication platform for customer engagement"
          tooltipPosition="bottom"
        />
      </div>
    </div>
  )
}
