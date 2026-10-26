/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "no-circular",
      severity: "error",
      comment: "Melarang circular dependencies antar modul",
      from: {},
      to: {
        circular: true,
      },
    },
    {
      name: "no-inter-section-coupling",
      severity: "warn",
      comment: "Seksi halaman independen tidak boleh saling mengimpor satu sama lain secara langsung",
      from: {
        path: "^src/components/sections/([^/]+)\\.tsx",
      },
      to: {
        path: "^src/components/sections/",
        pathNot: "^src/components/sections/$1\\.tsx",
      },
    },
    {
      name: "no-orphans",
      severity: "warn",
      comment: "Mendeteksi modul yang tidak memiliki referensi impor",
      from: {
        orphan: true,
        pathNot: [
          "(^|/)\\.[^/]+",
          "\\.d\\.ts$",
          "(^|/)next\\.config\\.mjs$",
          "(^|/)tailwind\\.config\\.ts$",
          "^src/app/",
        ],
      },
      to: {},
    },
  ],
  options: {
    doNotFollow: {
      path: "node_modules",
    },
    tsPreCompilationDeps: true,
    tsConfig: {
      fileName: "tsconfig.json",
    },
  },
};
