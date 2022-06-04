interface TwitterIconProps {
  className?: string;
}

export const TwitterIcon: React.FC<TwitterIconProps> = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 39 33"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M38.5214 4.27996C37.26 4.81628 35.9363 5.19255 34.5814 5.39997C35.2114 5.28997 36.1114 4.14995 36.4814 3.69995C37.0552 2.99711 37.4926 2.19335 37.7714 1.32996C37.796 1.30246 37.8096 1.26686 37.8096 1.22997C37.8096 1.19307 37.796 1.15746 37.7714 1.12996C37.7383 1.11536 37.7026 1.10782 37.6664 1.10782C37.6303 1.10782 37.5945 1.11536 37.5614 1.12996C36.1006 1.9089 34.5488 2.50345 32.9415 2.89997C32.8852 2.91818 32.8247 2.91935 32.7678 2.90334C32.7109 2.88732 32.66 2.85483 32.6214 2.80995C32.4949 2.66355 32.3578 2.52653 32.2114 2.39997C31.546 1.82215 30.7889 1.35914 29.9714 1.02996C28.8847 0.588426 27.7117 0.400343 26.5414 0.479967C25.402 0.553152 24.291 0.866689 23.2814 1.39997C22.2681 1.92664 21.3731 2.65488 20.6514 3.53996C19.9044 4.46273 19.3685 5.53792 19.0814 6.68996C18.8349 7.78037 18.8077 8.90894 19.0014 10.01C19.0014 10.19 19.0014 10.22 18.8414 10.19C12.4914 9.24996 7.2214 6.97996 2.9514 2.10996C2.7614 1.89996 2.6614 1.89996 2.5114 2.10996C0.641397 4.91996 1.51145 9.41996 3.88145 11.63C4.20145 11.93 4.52145 12.22 4.88145 12.49C3.81372 12.4136 2.77266 12.121 1.82146 11.63C1.63146 11.52 1.54141 11.63 1.52141 11.79C1.4921 12.0926 1.4921 12.3973 1.52141 12.7C1.708 14.1279 2.26877 15.4812 3.14683 16.6227C4.0249 17.7642 5.18905 18.6533 6.52141 19.2C6.84351 19.3365 7.17853 19.4404 7.52141 19.51C6.53307 19.704 5.51959 19.7344 4.52141 19.6C4.30141 19.6 4.22144 19.67 4.30144 19.88C5.63144 23.49 8.48144 24.56 10.6214 25.17C10.9114 25.17 11.2014 25.17 11.4814 25.29H11.4314C10.7214 26.37 8.26144 27.18 7.12144 27.58C5.01949 28.3234 2.78232 28.6065 0.561446 28.41C0.211446 28.36 0.141426 28.41 0.0414264 28.41C-0.0585736 28.41 0.041402 28.56 0.141402 28.65C0.591402 28.94 1.0414 29.21 1.5114 29.46C2.9029 30.2019 4.37172 30.7888 5.8914 31.21C13.7614 33.39 22.6314 31.79 28.5414 25.92C33.1814 21.3 34.8114 14.92 34.8114 8.57996C34.8114 8.32996 35.1014 8.18995 35.2814 8.05995C36.4773 7.1436 37.5378 6.06293 38.4314 4.84996C38.5774 4.67516 38.674 4.46458 38.7114 4.23996C38.7514 4.17996 38.6714 4.20996 38.5214 4.27996Z" />
  </svg>
);