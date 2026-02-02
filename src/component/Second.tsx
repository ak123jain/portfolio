import { BookOpen, Code, Server, Award, Check } from 'lucide-react';
import { useState } from 'react';

const Second = () => {
  // State for subtle hover animations
  const [hoveredSection, setHoveredSection] = useState<any>(null);

  // Technology logos using inline SVGs for better control
  const logos = {
    react: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500">
        <path fill="currentColor" d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394c-.384-.439-.769-.909-1.129-1.397s-.704-1-1.019-1.518c-.621-1.074-1.13-2.168-1.478-3.261-.378-1.186-.504-2.295-.392-3.217.11-.921.512-1.656 1.136-2.082.598-.42 1.361-.553 2.231-.371.871.178 1.8.618 2.725 1.262.652.455 1.299.969 1.918 1.523.619-.554 1.267-1.067 1.918-1.523.925-.645 1.854-1.084 2.725-1.262.87-.182 1.634-.049 2.232.371.623.426 1.027 1.161 1.136 2.082.112.922-.014 2.031-.392 3.217-.348 1.094-.857 2.187-1.478 3.261-.315.517-.657 1.03-1.02 1.518-.359.488-.741.959-1.128 1.397-.994 1.136-2.042 2.06-3.05 2.651-.55.323-1.093.574-1.605.716-.512.142-1 .177-1.447.06-.448-.118-.847-.404-1.134-.919-.287-.518-.436-1.161-.436-1.861 0-.698.149-1.47.374-2.251.226-.781.522-1.582.872-2.336.347-.754.745-1.463 1.152-2.079-.407-.616-.805-1.325-1.152-2.079-.35-.754-.646-1.555-.873-2.336-.225-.782-.374-1.553-.374-2.251 0-.7.149-1.344.436-1.861.287-.515.684-.802 1.134-.919.446-.117.935-.082 1.447.06.512.142 1.054.393 1.605.716 1.008.592 2.056 1.515 3.05 2.651zm7.925.692c.384-.439.769-.909 1.128-1.397.363-.488.705-1 1.02-1.518.621-1.074 1.129-2.168 1.477-3.261.378-1.186.504-2.295.392-3.217-.11-.921-.512-1.656-1.136-2.082-.598-.42-1.361-.553-2.231-.371-.872.178-1.8.618-2.726 1.262-.652.455-1.3.969-1.918 1.523.619.554 1.267 1.067 1.918 1.523.925.645 1.854 1.084 2.726 1.262.87.182 1.634.049 2.231-.371.623-.426 1.027-1.161 1.136-2.082.112-.922-.014-2.031-.392-3.217-.348-1.094-.856-2.187-1.477-3.261-.315-.517-.657-1.03-1.02-1.518-.36-.488-.744-.959-1.128-1.397-.994-1.136-2.042-2.06-3.05-2.651-.55-.323-1.093-.574-1.605-.716-.512-.142-1-.177-1.447-.06-.448.118-.847.404-1.134.919-.287.518-.436 1.161-.436 1.861 0 .698.149 1.47.374 2.251.226.781.522 1.582.873 2.336.347.754.745 1.463 1.152 2.079.407.616.805 1.325 1.152 2.079.35.754.646 1.555.873 2.336.225.782.374 1.553.374 2.251 0 .7-.149 1.344-.436 1.861-.287.515-.686.802-1.134.919-.447.117-.935.082-1.447-.06-.512-.142-1.054-.393-1.605-.716-1.008-.592-2.056-1.515-3.05-2.651zM12 16.287a4.28 4.28 0 100-8.56 4.28 4.28 0 000 8.56z" />
      </svg>
    ),
    mongodb: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-600">
        <path fill="currentColor" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
      </svg>
    ),
    node: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-700">
        <path fill="currentColor" d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 01-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01-.53.3-.63.36-1.12.51-.12.04-.31.11.07.32l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47a.226.226 0 00-.22-.18h-.96c-.12 0-.21.09-.21.22 0 1.24.68 2.74 3.94 2.74 2.35 0 3.7-.93 3.7-2.55 0-1.61-1.08-2.03-3.37-2.34-2.31-.3-2.54-.46-2.54-1 0-.45.2-1.05 1.91-1.05 1.5 0 2.09.33 2.32 1.36.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07.04-.04.07-.1.05-.16C19.25 8.57 17.89 8 14 8z" />
      </svg>
    ),
    express: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-700">
        <path fill="currentColor" d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
      </svg>
    ),
    tailwind: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-400">
        <path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-800">
        <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    docker: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600">
        <path fill="currentColor" d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
      </svg>
    ),
    aws: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-500">
        <path fill="currentColor" d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.4-.287-.77-.415l-1.109-.343c-.55-.167-.947-.399-1.204-.687a1.653 1.653 0 0 1-.38-1.06c0-.455.136-.854.4-1.205.263-.35.622-.623 1.076-.815.455-.191.97-.287 1.548-.287.272 0 .55.016.83.048.28.032.543.08.79.136.243.064.446.136.614.232.167.096.28.2.335.31.064.112.096.231.096.366v.375c0 .167-.064.256-.184.256-.063 0-.174-.048-.327-.127-.35-.183-.737-.28-1.157-.28-.437 0-.793.064-1.068.199-.272.135-.407.343-.407.63 0 .168.048.32.143.44.096.12.272.24.535.35l1.068.336c.534.168.917.399 1.141.687.223.287.335.647.335 1.076 0 .472-.149.887-.438 1.245-.288.358-.654.623-1.101.79-.446.167-.944.247-1.5.247zm3.785-.631V5.868c0-.175.08-.262.24-.262h.76c.16 0 .24.07.24.221v6.812c0 .168-.08.255-.24.255h-.76c-.135 0-.215-.03-.256-.08-.039-.056-.063-.16-.063-.303zm4.6.64c-.136 0-.224-.024-.287-.064-.064-.04-.118-.15-.167-.311L20.29 5.552a1.56 1.56 0 0 1-.071-.32c0-.13.07-.2.19-.2h.694c.16 0 .263.04.319.08.064.05.112.16.16.31l1.677 5.293 1.548-5.292c.04-.16.087-.264.15-.312a.586.586 0 0 1 .32-.08h.566c.16 0 .256.04.32.08.063.05.12.16.15.312l1.573 5.348 1.718-5.348c.048-.152.104-.264.16-.312a.56.56 0 0 1 .313-.08h.67c.127 0 .19.065.19.2 0 .04-.007.08-.015.128a.789.789 0 0 1-.056.2l-2.275 6.17c-.048.16-.096.263-.16.311a.47.47 0 0 1-.287.08h-.606c-.16 0-.263-.023-.327-.08-.064-.056-.112-.16-.15-.32l-1.549-5.12-1.532 5.12c-.04.16-.087.264-.15.32-.064.056-.167.08-.319.08zm10.64.215c-.391 0-.782-.04-1.181-.12a5.194 5.194 0 0 1-1.005-.287c-.135-.056-.23-.127-.279-.2a.532.532 0 0 1-.071-.263v-.397c0-.175.064-.255.191-.255.055 0 .11.008.167.023a.645.645 0 0 1 .175.064c.231.095.494.175.79.231.294.056.59.088.885.088.471 0 .838-.08 1.084-.24.247-.16.375-.399.375-.71 0-.208-.063-.376-.184-.512-.12-.135-.343-.263-.67-.39l-.958-.305c-.566-.183-.977-.432-1.229-.742-.255-.31-.375-.7-.375-1.156 0-.335.08-.632.239-.887.16-.255.375-.471.646-.647.27-.175.574-.312.909-.407.336-.096.694-.144 1.076-.144.199 0 .406.008.614.032.207.024.406.056.598.096.191.048.367.096.534.16.167.063.296.135.39.215.12.096.215.208.279.32.063.111.095.247.095.414v.367c0 .176-.063.264-.19.264-.072 0-.176-.04-.312-.112a3.147 3.147 0 0 0-1.333-.303c-.43 0-.774.07-1.045.215-.27.144-.406.367-.406.67 0 .216.072.392.216.536.143.144.375.28.702.398l.934.303c.558.184.958.416 1.212.694.254.279.391.631.391 1.061 0 .344-.088.655-.255.926-.167.27-.405.487-.709.647-.315.16-.675.28-1.085.367-.407.088-.838.128-1.284.128zm-28.11-7.843v-.887h2.587c.073 0 .139-.016.198-.048a.37.37 0 0 0 .152-.128.526.526 0 0 0 .096-.183 1.581 1.581 0 0 0 .064-.471c0-.152-.009-.296-.023-.43a.876.876 0 0 0-.096-.334.555.555 0 0 0-.184-.223c-.08-.056-.184-.084-.312-.084h-1.037c-.367 0-.67-.088-.918-.256-.247-.175-.375-.43-.375-.774V7.19c0-.168.032-.327.088-.471a.968.968 0 0 1 .256-.375 1.19 1.19 0 0 1 .415-.248c.16-.056.34-.088.534-.088h2.275v.886h-2.195c-.18 0-.272.096-.272.288v.583c0 .175.096.271.288.271h1.012c.559 0 .966.112 1.22.335.256.224.383.607.383 1.133 0 .26-.04.487-.111.67a1.08 1.08 0 0 1-.319.471 1.322 1.322 0 0 1-.51.279 2.2 2.2 0 0 1-.67.088H6.14z" />
      </svg>
    ),
    vercel: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-black">
        <path fill="currentColor" d="M12 1L24 22H0L12 1z" />
      </svg>
    ),
    figma: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-pink-500">
        <path fill="currentColor" d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm-4.589 0V15.5H4.49C2.014 15.5 0 13.486 0 11.01c0-2.476 2.014-4.49 4.49-4.49h3.656v.99zm0 7.51v6.99H4.49C2.014 22.01 0 19.996 0 17.52s2.014-4.49 4.49-4.49h3.656v.99zm4.589 0v.99h3.117c1.665 0 3.019 1.355 3.019 3.02s-1.354 3.019-3.019 3.019h-3.117v-7.029zm0-7.51h7.647c-.08-1.586-1.355-2.863-2.941-2.942-1.023-.044-1.414.123-2.323.437-.379.129-.726.245-1.06.245-.49 0-.97-.25-1.394-.436-.979-.436-1.072-.533-1.918-.533v3.23H8.146z" />
      </svg>
    ),
  };

  // Section style with hover effect
  const sectionStyle = (id: any) =>
    `mb-16 rounded-lg p-6 transition-all duration-300 ${hoveredSection === id ? 'bg-gray-50 shadow-md' : ''}`;

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header with animation */}
        <div className="mb-16 text-center">
          <div className="flex justify-center space-x-4 mb-6">
            {/* Main tech logos in a row */}
            <div className="p-3 bg-white rounded-full shadow-md">{logos.react}</div>
            <div className="p-3 bg-white rounded-full shadow-md">{logos.node}</div>
            <div className="p-3 bg-white rounded-full shadow-md">{logos.mongodb}</div>
            <div className="p-3 bg-white rounded-full shadow-md">{logos.tailwind}</div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Professional Qualifications
          </h2>
          <div className="w-24 h-1 bg-gray-800 mb-6 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experienced full-stack developer with expertise in modern web technologies and a strong educational background
          </p>
        </div>

        {/* Education Section */}
        <div
          className={sectionStyle('education')}
          onMouseEnter={() => setHoveredSection('education')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <BookOpen className="mr-3 text-blue-600" size={24} />
            Education
          </h3>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row border-b border-gray-200 pb-6">
              <div className="md:w-1/4">
                <span className="text-gray-500 font-medium">2022 - 2026</span>
              </div>
              <div className="md:w-3/4">
                <h4 className="font-bold text-gray-800 text-xl">Bachelor of Computer Science</h4>
                <p className="text-gray-600 mb-2">Terrthankar Mahaveer University</p>
                <p className="text-gray-700">
                  Focused on web development, algorithms, and data structures. Graduated with honors.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4">
                <span className="text-gray-500 font-medium">2022</span>
              </div>
              <div className="md:w-3/4">
                <h4 className="font-bold text-gray-800 text-xl">Full Stack Web Development</h4>
                <p className="text-gray-600 mb-2">Tech Bootcamp</p>
                <p className="text-gray-700">
                  Intensive 12-week program covering modern web development practices with MERN stack.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div
          className={sectionStyle('skills')}
          onMouseEnter={() => setHoveredSection('skills')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Code className="mr-3 text-blue-600" size={24} />
            Technical Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Frontend */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                  {logos.react}
                </div>
                Frontend Development
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>React.js with functional components & hooks</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>Modern JavaScript (ES6+) development</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>Responsive design with HTML5 & CSS3</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>Tailwind CSS for efficient styling</span>
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mr-3">
                  {logos.node}
                </div>
                Backend Development
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>Node.js server environment</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>Express.js framework for API development</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>RESTful API architecture and implementation</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>JWT authentication & authorization</span>
                </li>
              </ul>
            </div>

            {/* Database */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mr-3">
                  {logos.mongodb}
                </div>
                Database Management
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>MongoDB database design & implementation</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>Mongoose ODM for data modeling</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>SQL fundamentals for relational databases</span>
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-3">
                  {logos.github}
                </div>
                Professional Tools
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>Git version control & GitHub collaboration</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>Docker containerization for development</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>AWS & Vercel cloud deployment</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <Check size={16} className="mr-2 text-green-500" />
                  <span>Figma for UI/UX collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div
          className={sectionStyle('stack')}
          onMouseEnter={() => setHoveredSection('stack')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Server className="mr-3 text-blue-600" size={24} />
            Technology Stack
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {/* Technology logos with labels */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                {logos.react}
              </div>
              <span className="text-gray-700 font-medium">React</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                {logos.mongodb}
              </div>
              <span className="text-gray-700 font-medium">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                {logos.node}
              </div>
              <span className="text-gray-700 font-medium">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                {logos.express}
              </div>
              <span className="text-gray-700 font-medium">Express</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                {logos.tailwind}
              </div>
              <span className="text-gray-700 font-medium">Tailwind</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                {logos.github}
              </div>
              <span className="text-gray-700 font-medium">GitHub</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                {logos.docker}
              </div>
              <span className="text-gray-700 font-medium">Docker</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                {logos.aws}
              </div>
              <span className="text-gray-700 font-medium">AWS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                {logos.vercel}
              </div>
              <span className="text-gray-700 font-medium">Vercel</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
                {logos.figma}
              </div>
              <span className="text-gray-700 font-medium">Figma</span>
            </div>
          </div>
        </div>


        {/* Certifications */}
        <div
          className={sectionStyle('certifications')}
          onMouseEnter={() => setHoveredSection('certifications')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Award className="mr-3 text-blue-600" size={24} />
            Certifications
          </h3>

          <div className="relative border-l-2 border-gray-300 pl-6 ml-3">
            <div className="relative">
              <div className="absolute -left-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="flex items-center mb-2">
                <h4 className="font-bold text-gray-800 text-xl">Deloitte - React Developer</h4>
                <div className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">2024</div>
              </div>
              <p className="text-gray-700">
                Professional certification validating expertise in React development best practices and modern front-end architecture.
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Second;