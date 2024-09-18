import { useTheme } from 'antd-style';  
import { memo, useState } from 'react';  
import { MathJax, MathJaxContext } from 'better-react-mathjax';  

const StopLoadingIcon = memo(() => {  
  const theme = useTheme();  
  const [isPreviewMode, setIsPreviewMode] = useState(false); // 状态管理，控制预览模式  

  const togglePreviewMode = () => {  
    setIsPreviewMode(!isPreviewMode); // 切换预览模式  
  };  

  return (  
    <div className="flex flex-col items-center">  
      <button   
        onClick={togglePreviewMode}   
        className="mb-4 p-2 bg-blue-500 text-white rounded"  
      >  
        {isPreviewMode ? '显示图标' : '显示公式'}  
      </button>  
      {isPreviewMode ? (  
        <MathJaxContext>  
          <div style={{ color: theme.colorText, fontSize: '24px' }}>  
            <MathJax>  
              {`\
$$  
 E = mc^2 \
$$  
`} {/* 这里是你想要展示的公式 */}  
            </MathJax>  
          </div>  
        </MathJaxContext>  
      ) : (  
        <svg  
          className={'anticon'}  
          color="currentColor"  
          height={64} // 增加高度以便更好展示  
          viewBox="0 0 1024 1024"  
          width={64} // 增加宽度以便更好展示  
          xmlns="http://www.w3.org/2000/svg"  
          xmlnsXlink="http://www.w3.org/1999/xlink"  
        >  
          <g fill="none">  
            <circle cx="512" cy="512" fill="none" r="426" stroke={theme.colorBorder} strokeWidth="72" />  
            <rect fill="currentColor" height="252" rx="24" ry="24" width="252" x="386" y="386" />  
            <path  
              d="M938.667 512C938.667 276.359 747.64 85.333 512 85.333"  
              stroke="currentColor"  
              strokeLinecap="round"  
              strokeWidth="73"  
            >  
              <animateTransform  
                attributeName="transform"  
                dur="1s"  
                from="0 512 512"  
                repeatCount="indefinite"  
                to="360 512 512"  
                type="rotate"  
              />  
            </path>  
          </g>  
        </svg>  
      )}  
    </div>  
  );  
});  

export default StopLoadingIcon;
